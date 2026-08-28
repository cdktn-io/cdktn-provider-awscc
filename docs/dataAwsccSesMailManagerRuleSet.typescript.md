# `dataAwsccSesMailManagerRuleSet` Submodule <a name="`dataAwsccSesMailManagerRuleSet` Submodule" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSesMailManagerRuleSet <a name="DataAwsccSesMailManagerRuleSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ses_mail_manager_rule_set awscc_ses_mail_manager_rule_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet(scope: Construct, id: string, config: DataAwsccSesMailManagerRuleSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig">DataAwsccSesMailManagerRuleSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig">DataAwsccSesMailManagerRuleSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSesMailManagerRuleSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isConstruct"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isTerraformElement"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isTerraformDataSource"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.generateConfigForImport"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSesMailManagerRuleSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSesMailManagerRuleSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSesMailManagerRuleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ses_mail_manager_rule_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSesMailManagerRuleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList">DataAwsccSesMailManagerRuleSetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.ruleSetArn">ruleSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.ruleSetId">ruleSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.ruleSetName">ruleSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList">DataAwsccSesMailManagerRuleSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.rules"></a>

```typescript
public readonly rules: DataAwsccSesMailManagerRuleSetRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList">DataAwsccSesMailManagerRuleSetRulesList</a>

---

##### `ruleSetArn`<sup>Required</sup> <a name="ruleSetArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.ruleSetArn"></a>

```typescript
public readonly ruleSetArn: string;
```

- *Type:* string

---

##### `ruleSetId`<sup>Required</sup> <a name="ruleSetId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.ruleSetId"></a>

```typescript
public readonly ruleSetId: string;
```

- *Type:* string

---

##### `ruleSetName`<sup>Required</sup> <a name="ruleSetName" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.ruleSetName"></a>

```typescript
public readonly ruleSetName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.tags"></a>

```typescript
public readonly tags: DataAwsccSesMailManagerRuleSetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList">DataAwsccSesMailManagerRuleSetTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSesMailManagerRuleSetConfig <a name="DataAwsccSesMailManagerRuleSetConfig" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetConfig: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ses_mail_manager_rule_set#id DataAwsccSesMailManagerRuleSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSesMailManagerRuleSetRules <a name="DataAwsccSesMailManagerRuleSetRules" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRules.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRules: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRules = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesActions <a name="DataAwsccSesMailManagerRuleSetRulesActions" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActions.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesActions: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActions = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesActionsAddHeader <a name="DataAwsccSesMailManagerRuleSetRulesActionsAddHeader" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeader.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesActionsAddHeader: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeader = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesActionsArchive <a name="DataAwsccSesMailManagerRuleSetRulesActionsArchive" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchive"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchive.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesActionsArchive: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchive = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesActionsBounce <a name="DataAwsccSesMailManagerRuleSetRulesActionsBounce" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounce"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounce.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesActionsBounce: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounce = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox <a name="DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness <a name="DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda <a name="DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns <a name="DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesActionsPublishToSns: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesActionsRelay <a name="DataAwsccSesMailManagerRuleSetRulesActionsRelay" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelay"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelay.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesActionsRelay: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelay = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient <a name="DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesActionsSend <a name="DataAwsccSesMailManagerRuleSetRulesActionsSend" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSend.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesActionsSend: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSend = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3 <a name="DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesActionsWriteToS3: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3 = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesConditions <a name="DataAwsccSesMailManagerRuleSetRulesConditions" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditions.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesConditions: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditions = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression <a name="DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression <a name="DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesConditionsIpExpression: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression <a name="DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression <a name="DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesConditionsStringExpression: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression <a name="DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesUnless <a name="DataAwsccSesMailManagerRuleSetRulesUnless" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnless"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnless.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesUnless: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnless = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression <a name="DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression <a name="DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesUnlessIpExpression: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression <a name="DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression <a name="DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesUnlessStringExpression: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression <a name="DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate <a name="DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate = { ... }
```


### DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis <a name="DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis = { ... }
```


### DataAwsccSesMailManagerRuleSetTags <a name="DataAwsccSesMailManagerRuleSetTags" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTags.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerRuleSetTags: dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.headerValue">headerValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeader">DataAwsccSesMailManagerRuleSetRulesActionsAddHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesActionsAddHeader;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeader">DataAwsccSesMailManagerRuleSetRulesActionsAddHeader</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.actionFailurePolicy">actionFailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.targetArchive">targetArchive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchive">DataAwsccSesMailManagerRuleSetRulesActionsArchive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionFailurePolicy`<sup>Required</sup> <a name="actionFailurePolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.actionFailurePolicy"></a>

```typescript
public readonly actionFailurePolicy: string;
```

- *Type:* string

---

##### `targetArchive`<sup>Required</sup> <a name="targetArchive" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.targetArchive"></a>

```typescript
public readonly targetArchive: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesActionsArchive;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchive">DataAwsccSesMailManagerRuleSetRulesActionsArchive</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.actionFailurePolicy">actionFailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.diagnosticMessage">diagnosticMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.sender">sender</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.smtpReplyCode">smtpReplyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounce">DataAwsccSesMailManagerRuleSetRulesActionsBounce</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionFailurePolicy`<sup>Required</sup> <a name="actionFailurePolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.actionFailurePolicy"></a>

```typescript
public readonly actionFailurePolicy: string;
```

- *Type:* string

---

##### `diagnosticMessage`<sup>Required</sup> <a name="diagnosticMessage" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.diagnosticMessage"></a>

```typescript
public readonly diagnosticMessage: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `sender`<sup>Required</sup> <a name="sender" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.sender"></a>

```typescript
public readonly sender: string;
```

- *Type:* string

---

##### `smtpReplyCode`<sup>Required</sup> <a name="smtpReplyCode" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.smtpReplyCode"></a>

```typescript
public readonly smtpReplyCode: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesActionsBounce;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounce">DataAwsccSesMailManagerRuleSetRulesActionsBounce</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.actionFailurePolicy">actionFailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.mailboxArn">mailboxArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionFailurePolicy`<sup>Required</sup> <a name="actionFailurePolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.actionFailurePolicy"></a>

```typescript
public readonly actionFailurePolicy: string;
```

- *Type:* string

---

##### `mailboxArn`<sup>Required</sup> <a name="mailboxArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.mailboxArn"></a>

```typescript
public readonly mailboxArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailbox</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.actionFailurePolicy">actionFailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.indexId">indexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionFailurePolicy`<sup>Required</sup> <a name="actionFailurePolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.actionFailurePolicy"></a>

```typescript
public readonly actionFailurePolicy: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusiness</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.actionFailurePolicy">actionFailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.functionArn">functionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.invocationType">invocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.retryTimeMinutes">retryTimeMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda">DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionFailurePolicy`<sup>Required</sup> <a name="actionFailurePolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.actionFailurePolicy"></a>

```typescript
public readonly actionFailurePolicy: string;
```

- *Type:* string

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

---

##### `invocationType`<sup>Required</sup> <a name="invocationType" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.invocationType"></a>

```typescript
public readonly invocationType: string;
```

- *Type:* string

---

##### `retryTimeMinutes`<sup>Required</sup> <a name="retryTimeMinutes" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.retryTimeMinutes"></a>

```typescript
public readonly retryTimeMinutes: number;
```

- *Type:* number

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda">DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambda</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsList <a name="DataAwsccSesMailManagerRuleSetRulesActionsList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.get"></a>

```typescript
public get(index: number): DataAwsccSesMailManagerRuleSetRulesActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSesMailManagerRuleSetRulesActionsOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.addHeader">addHeader</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.archive">archive</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.bounce">bounce</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.deliverToMailbox">deliverToMailbox</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.deliverToQBusiness">deliverToQBusiness</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.drop">drop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.invokeLambda">invokeLambda</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.publishToSns">publishToSns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.relay">relay</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.replaceRecipient">replaceRecipient</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.send">send</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.writeToS3">writeToS3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference">DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActions">DataAwsccSesMailManagerRuleSetRulesActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addHeader`<sup>Required</sup> <a name="addHeader" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.addHeader"></a>

```typescript
public readonly addHeader: DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsAddHeaderOutputReference</a>

---

##### `archive`<sup>Required</sup> <a name="archive" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.archive"></a>

```typescript
public readonly archive: DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsArchiveOutputReference</a>

---

##### `bounce`<sup>Required</sup> <a name="bounce" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.bounce"></a>

```typescript
public readonly bounce: DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsBounceOutputReference</a>

---

##### `deliverToMailbox`<sup>Required</sup> <a name="deliverToMailbox" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.deliverToMailbox"></a>

```typescript
public readonly deliverToMailbox: DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToMailboxOutputReference</a>

---

##### `deliverToQBusiness`<sup>Required</sup> <a name="deliverToQBusiness" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.deliverToQBusiness"></a>

```typescript
public readonly deliverToQBusiness: DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsDeliverToQBusinessOutputReference</a>

---

##### `drop`<sup>Required</sup> <a name="drop" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.drop"></a>

```typescript
public readonly drop: string;
```

- *Type:* string

---

##### `invokeLambda`<sup>Required</sup> <a name="invokeLambda" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.invokeLambda"></a>

```typescript
public readonly invokeLambda: DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsInvokeLambdaOutputReference</a>

---

##### `publishToSns`<sup>Required</sup> <a name="publishToSns" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.publishToSns"></a>

```typescript
public readonly publishToSns: DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference</a>

---

##### `relay`<sup>Required</sup> <a name="relay" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.relay"></a>

```typescript
public readonly relay: DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference</a>

---

##### `replaceRecipient`<sup>Required</sup> <a name="replaceRecipient" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.replaceRecipient"></a>

```typescript
public readonly replaceRecipient: DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference</a>

---

##### `send`<sup>Required</sup> <a name="send" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.send"></a>

```typescript
public readonly send: DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference">DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference</a>

---

##### `writeToS3`<sup>Required</sup> <a name="writeToS3" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.writeToS3"></a>

```typescript
public readonly writeToS3: DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference">DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesActions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActions">DataAwsccSesMailManagerRuleSetRulesActions</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.actionFailurePolicy">actionFailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.payloadType">payloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns">DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionFailurePolicy`<sup>Required</sup> <a name="actionFailurePolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.actionFailurePolicy"></a>

```typescript
public readonly actionFailurePolicy: string;
```

- *Type:* string

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `payloadType`<sup>Required</sup> <a name="payloadType" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.payloadType"></a>

```typescript
public readonly payloadType: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns">DataAwsccSesMailManagerRuleSetRulesActionsPublishToSns</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.actionFailurePolicy">actionFailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.mailFrom">mailFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.relay">relay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelay">DataAwsccSesMailManagerRuleSetRulesActionsRelay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionFailurePolicy`<sup>Required</sup> <a name="actionFailurePolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.actionFailurePolicy"></a>

```typescript
public readonly actionFailurePolicy: string;
```

- *Type:* string

---

##### `mailFrom`<sup>Required</sup> <a name="mailFrom" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.mailFrom"></a>

```typescript
public readonly mailFrom: string;
```

- *Type:* string

---

##### `relay`<sup>Required</sup> <a name="relay" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.relay"></a>

```typescript
public readonly relay: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesActionsRelay;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsRelay">DataAwsccSesMailManagerRuleSetRulesActionsRelay</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.replaceWith">replaceWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient">DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `replaceWith`<sup>Required</sup> <a name="replaceWith" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.replaceWith"></a>

```typescript
public readonly replaceWith: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipientOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient">DataAwsccSesMailManagerRuleSetRulesActionsReplaceRecipient</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.actionFailurePolicy">actionFailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSend">DataAwsccSesMailManagerRuleSetRulesActionsSend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionFailurePolicy`<sup>Required</sup> <a name="actionFailurePolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.actionFailurePolicy"></a>

```typescript
public readonly actionFailurePolicy: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSendOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesActionsSend;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsSend">DataAwsccSesMailManagerRuleSetRulesActionsSend</a>

---


### DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference <a name="DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.actionFailurePolicy">actionFailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.s3Prefix">s3Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.s3SseKmsKeyId">s3SseKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3">DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionFailurePolicy`<sup>Required</sup> <a name="actionFailurePolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.actionFailurePolicy"></a>

```typescript
public readonly actionFailurePolicy: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Prefix`<sup>Required</sup> <a name="s3Prefix" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.s3Prefix"></a>

```typescript
public readonly s3Prefix: string;
```

- *Type:* string

---

##### `s3SseKmsKeyId`<sup>Required</sup> <a name="s3SseKmsKeyId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.s3SseKmsKeyId"></a>

```typescript
public readonly s3SseKmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3">DataAwsccSesMailManagerRuleSetRulesActionsWriteToS3</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer">analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.resultField">resultField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```typescript
public readonly analyzer: string;
```

- *Type:* string

---

##### `resultField`<sup>Required</sup> <a name="resultField" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```typescript
public readonly resultField: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists">addressLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressLists`<sup>Required</sup> <a name="addressLists" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists"></a>

```typescript
public readonly addressLists: string[];
```

- *Type:* string[]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStruct</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.isInAddressList">isInAddressList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.analysis"></a>

```typescript
public readonly analysis: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateAnalysisOutputReference</a>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `isInAddressList`<sup>Required</sup> <a name="isInAddressList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.isInAddressList"></a>

```typescript
public readonly isInAddressList: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.evaluate"></a>

```typescript
public readonly evaluate: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression">DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression">DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.evaluate"></a>

```typescript
public readonly evaluate: DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsList <a name="DataAwsccSesMailManagerRuleSetRulesConditionsList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.get"></a>

```typescript
public get(index: number): DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.evaluate"></a>

```typescript
public readonly evaluate: DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.booleanExpression">booleanExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.dmarcExpression">dmarcExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.ipExpression">ipExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.numberExpression">numberExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.stringExpression">stringExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.verdictExpression">verdictExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditions">DataAwsccSesMailManagerRuleSetRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `booleanExpression`<sup>Required</sup> <a name="booleanExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.booleanExpression"></a>

```typescript
public readonly booleanExpression: DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsBooleanExpressionOutputReference</a>

---

##### `dmarcExpression`<sup>Required</sup> <a name="dmarcExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.dmarcExpression"></a>

```typescript
public readonly dmarcExpression: DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsDmarcExpressionOutputReference</a>

---

##### `ipExpression`<sup>Required</sup> <a name="ipExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.ipExpression"></a>

```typescript
public readonly ipExpression: DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsIpExpressionOutputReference</a>

---

##### `numberExpression`<sup>Required</sup> <a name="numberExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.numberExpression"></a>

```typescript
public readonly numberExpression: DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsNumberExpressionOutputReference</a>

---

##### `stringExpression`<sup>Required</sup> <a name="stringExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.stringExpression"></a>

```typescript
public readonly stringExpression: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference</a>

---

##### `verdictExpression`<sup>Required</sup> <a name="verdictExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.verdictExpression"></a>

```typescript
public readonly verdictExpression: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesConditions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditions">DataAwsccSesMailManagerRuleSetRulesConditions</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.analyzer">analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.resultField">resultField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```typescript
public readonly analyzer: string;
```

- *Type:* string

---

##### `resultField`<sup>Required</sup> <a name="resultField" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```typescript
public readonly resultField: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.clientCertificateAttribute">clientCertificateAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.mimeHeaderAttribute">mimeHeaderAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.analysis"></a>

```typescript
public readonly analysis: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateAnalysisOutputReference</a>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `clientCertificateAttribute`<sup>Required</sup> <a name="clientCertificateAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.clientCertificateAttribute"></a>

```typescript
public readonly clientCertificateAttribute: string;
```

- *Type:* string

---

##### `mimeHeaderAttribute`<sup>Required</sup> <a name="mimeHeaderAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.mimeHeaderAttribute"></a>

```typescript
public readonly mimeHeaderAttribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.evaluate"></a>

```typescript
public readonly evaluate: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression">DataAwsccSesMailManagerRuleSetRulesConditionsStringExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.analyzer">analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.resultField">resultField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```typescript
public readonly analyzer: string;
```

- *Type:* string

---

##### `resultField`<sup>Required</sup> <a name="resultField" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```typescript
public readonly resultField: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.analysis"></a>

```typescript
public readonly analysis: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateAnalysisOutputReference</a>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.evaluate"></a>

```typescript
public readonly evaluate: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression">DataAwsccSesMailManagerRuleSetRulesConditionsVerdictExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesList <a name="DataAwsccSesMailManagerRuleSetRulesList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.get"></a>

```typescript
public get(index: number): DataAwsccSesMailManagerRuleSetRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSesMailManagerRuleSetRulesOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList">DataAwsccSesMailManagerRuleSetRulesActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList">DataAwsccSesMailManagerRuleSetRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.unless">unless</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList">DataAwsccSesMailManagerRuleSetRulesUnlessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRules">DataAwsccSesMailManagerRuleSetRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.actions"></a>

```typescript
public readonly actions: DataAwsccSesMailManagerRuleSetRulesActionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesActionsList">DataAwsccSesMailManagerRuleSetRulesActionsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.conditions"></a>

```typescript
public readonly conditions: DataAwsccSesMailManagerRuleSetRulesConditionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesConditionsList">DataAwsccSesMailManagerRuleSetRulesConditionsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `unless`<sup>Required</sup> <a name="unless" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.unless"></a>

```typescript
public readonly unless: DataAwsccSesMailManagerRuleSetRulesUnlessList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList">DataAwsccSesMailManagerRuleSetRulesUnlessList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRules">DataAwsccSesMailManagerRuleSetRules</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer">analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.resultField">resultField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```typescript
public readonly analyzer: string;
```

- *Type:* string

---

##### `resultField`<sup>Required</sup> <a name="resultField" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```typescript
public readonly resultField: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists">addressLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressLists`<sup>Required</sup> <a name="addressLists" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists"></a>

```typescript
public readonly addressLists: string[];
```

- *Type:* string[]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStruct</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.isInAddressList">isInAddressList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.analysis"></a>

```typescript
public readonly analysis: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateAnalysisOutputReference</a>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `isInAddressList`<sup>Required</sup> <a name="isInAddressList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.isInAddressList"></a>

```typescript
public readonly isInAddressList: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateIsInAddressListStructOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.evaluate"></a>

```typescript
public readonly evaluate: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression">DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression">DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.evaluate"></a>

```typescript
public readonly evaluate: DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessList <a name="DataAwsccSesMailManagerRuleSetRulesUnlessList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.get"></a>

```typescript
public get(index: number): DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.evaluate"></a>

```typescript
public readonly evaluate: DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.booleanExpression">booleanExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.dmarcExpression">dmarcExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.ipExpression">ipExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.numberExpression">numberExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.stringExpression">stringExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.verdictExpression">verdictExpression</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnless">DataAwsccSesMailManagerRuleSetRulesUnless</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `booleanExpression`<sup>Required</sup> <a name="booleanExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.booleanExpression"></a>

```typescript
public readonly booleanExpression: DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessBooleanExpressionOutputReference</a>

---

##### `dmarcExpression`<sup>Required</sup> <a name="dmarcExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.dmarcExpression"></a>

```typescript
public readonly dmarcExpression: DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessDmarcExpressionOutputReference</a>

---

##### `ipExpression`<sup>Required</sup> <a name="ipExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.ipExpression"></a>

```typescript
public readonly ipExpression: DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessIpExpressionOutputReference</a>

---

##### `numberExpression`<sup>Required</sup> <a name="numberExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.numberExpression"></a>

```typescript
public readonly numberExpression: DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessNumberExpressionOutputReference</a>

---

##### `stringExpression`<sup>Required</sup> <a name="stringExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.stringExpression"></a>

```typescript
public readonly stringExpression: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference</a>

---

##### `verdictExpression`<sup>Required</sup> <a name="verdictExpression" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.verdictExpression"></a>

```typescript
public readonly verdictExpression: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesUnless;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnless">DataAwsccSesMailManagerRuleSetRulesUnless</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.analyzer">analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.resultField">resultField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```typescript
public readonly analyzer: string;
```

- *Type:* string

---

##### `resultField`<sup>Required</sup> <a name="resultField" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```typescript
public readonly resultField: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.clientCertificateAttribute">clientCertificateAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.mimeHeaderAttribute">mimeHeaderAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.analysis"></a>

```typescript
public readonly analysis: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateAnalysisOutputReference</a>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `clientCertificateAttribute`<sup>Required</sup> <a name="clientCertificateAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.clientCertificateAttribute"></a>

```typescript
public readonly clientCertificateAttribute: string;
```

- *Type:* string

---

##### `mimeHeaderAttribute`<sup>Required</sup> <a name="mimeHeaderAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.mimeHeaderAttribute"></a>

```typescript
public readonly mimeHeaderAttribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.evaluate"></a>

```typescript
public readonly evaluate: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression">DataAwsccSesMailManagerRuleSetRulesUnlessStringExpression</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.analyzer">analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.resultField">resultField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```typescript
public readonly analyzer: string;
```

- *Type:* string

---

##### `resultField`<sup>Required</sup> <a name="resultField" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```typescript
public readonly resultField: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysis</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.analysis"></a>

```typescript
public readonly analysis: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateAnalysisOutputReference</a>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluate</a>

---


### DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference <a name="DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.evaluate"></a>

```typescript
public readonly evaluate: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionEvaluateOutputReference</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression">DataAwsccSesMailManagerRuleSetRulesUnlessVerdictExpression</a>

---


### DataAwsccSesMailManagerRuleSetTagsList <a name="DataAwsccSesMailManagerRuleSetTagsList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSesMailManagerRuleSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSesMailManagerRuleSetTagsOutputReference <a name="DataAwsccSesMailManagerRuleSetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerRuleSet } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTags">DataAwsccSesMailManagerRuleSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerRuleSetTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerRuleSet.DataAwsccSesMailManagerRuleSetTags">DataAwsccSesMailManagerRuleSetTags</a>

---



